<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Catch_;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::select('id', 'name', 'category', 'image')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'image' => 'required|image'
        ]);

        try {
            $imageName = Str::random(floor(microtime(true) * 1000)).'.'. $request->image->getClientOriginalExtension();
            $formFields['image'] = $request->file('image')->store('product/images/'.$imageName.'', 'public');
            // Storage::disk('public')->putFilesAs('products/image', $request->image,$imageName);
            Product::create($request->post()+['image'=>$imageName]);

            return response()->json(['message'=>'Product Created Successfully!!']);
        }catch(Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message'=>'something went wrong while creating the product!!'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json(['product'=>$product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
       $formFields = $request->validate([
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'image' => 'required|image'
        ]);

        try {
            $product->fill($request->post())->update();

        if($request->hasFile('image')) {
            //remove old image
            if ($product->image) {
                $exists = Storage::disk('public')->exists("product/image/{$product->image}");
                if($exists) {
                    Storage::disk('public')->delete("product/image/{$product->image}");
                }
            }

            $imageName = Str::random(floor(microtime(true) * 1000)).'.'. $request->image->getClientOriginalExtension();
            $formFields['image'] = $request->file('image')->store('product/images/'.$imageName.'', 'public');
            $product->image = $imageName;
            $product->save();
        }

        return response()->json([
            'message' => 'Product Updated Successfully!!'
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while updating the product'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            if($product->image){
                $exists = Storage::disk('public')->exists("product/image/{$product->image}");
                if($exists) {
                    Storage::disk('public')->delete("product/image{product->image}");
                }
            }
            $product->delete();

            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something went wrong while deleting the product!!'
            ]);
        }
    }
}
