import { products } from '@/assets/local_json/product_data.json';
// import { defineStore } from "pinia";


export function show_product() {
    //因為畫面處理用陣列去顯示資料,所以這邊用陣列
    let arrayOfObjects = [];
    let sumobject = [];
    var totalprice = 0;
    var totallist = 0;

    //確保函數執行時localstorage必定有這個陣列
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // 從 localStorage 中獲取 cart 的值
    var cartJSON = localStorage.getItem('cart');

    // 將 cart 的 JSON 字串轉換為 JavaScript 陣列
    var cart = JSON.parse(cartJSON);
    // console.log(cart);
    // console.log(products);

    cart.forEach(element => {
        // 使用 find 方法用cart的每個productId 去 products json 尋找符合特定 product_no 的商品
        //shownum類似元件概念
        var shownum = products.find(item => item.product_no == element.productId);
        if (shownum) {
            arrayOfObjects.push({
                product_no: shownum.product_no,
                product_name: shownum.product_name,
                price: shownum.price,
                product_pic1: shownum.product_pic1,
                quantity: element.quantity
            });
            totalprice = totalprice + (shownum.price * element.quantity);
            totallist = totallist + 1;
        }
    });

    sumobject = [{ total: totalprice, listcount: totallist }];

    arrayOfObjects.sort((a, b) => {
        // 商品編號按照順序排列
        return a.product_no - b.product_no;
    });

    return [arrayOfObjects, sumobject];
}

//會有一個func是判斷按鈕增加到購物車的數量
export function changeqty(event, id, qty) {
    event.preventDefault();// 阻止默認行為，例如超連結
    // alert(id + ' ' + qty);(測試用)

    //確保函數執行時localstorage必定有這個陣列
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // 從 localStorage 中獲取 cart 的值
    var cartJSON = localStorage.getItem('cart');

    // 將 cart 的 JSON 字串轉換為 JavaScript 陣列
    var cart = JSON.parse(cartJSON);

    // 使用 find 方法尋找符合特定 productId 的商品(判斷原本就在購物車還是新增的商品)
    var checkproduct = cart.find(item => item.productId == id);

    // 如果找到了，checkproduct 將是找到的商品，否則為 undefined
    if (checkproduct) {
        if (checkproduct.quantity + qty > 0) {
            checkproduct.quantity += qty;
        }
        else {
            //要刪除的索引值
            var removeindex = cart.indexOf(checkproduct);
            //清除購物車的該項商品
            cart.splice(removeindex, 1);
        }
    } else if (qty > 0) {
        cart.push({ productId: id, quantity: qty });
    }


    cart.sort((a, b) => {
        // 讓商品按照順序排列
        return a.productId - b.productId;
    });

    // 將修改後的 cart 陣列轉換回 JSON 字串
    var newCartJSON = JSON.stringify(cart);

    // 將更新後的值存回 localStorage
    localStorage.setItem('cart', newCartJSON);

    // 手动创建一个模拟的 storage 事件
    var storageEvent = new Event('storage');
    storageEvent.key = 'cart';
    // 触发事件
    window.dispatchEvent(storageEvent);

    // 把local storage的資料重新rander到畫面中
    // usecartListStore().setCartList()
    // console.log(usecartListStore());
}

// export function clearAllPro() {
  

// }




// //會有一個func是清除這個在陣列內的商品
// export function deleteProduct(id) {
//     event.preventDefault();// 阻止默認行為，例如超連結

//     // 從 localStorage 中獲取 cart 的值
//     var cartJSON = localStorage.getItem('cart');

//     // 將 cart 的 JSON 字串轉換為 JavaScript 陣列
//     var cart = JSON.parse(cartJSON);

//     // 使用 findIndex 方法找到需刪除購物車商品目前的"索引值"
//     var findProductIndex = cart.findIndex(item => item.productId == id);
//     cart.splice(findProductIndex, 1);


//     cart.sort((a, b) => {
//         // 讓商品按照順序排列
//         return a.productId - b.productId;
//     });

//     // 將修改後的 cart 陣列轉換回 JSON 字串
//     var newCartJSON = JSON.stringify(cart);

//     // 將更新後的值存回 localStorage
//     localStorage.setItem('cart', newCartJSON);

//     // 把local storage的資料重新rander到畫面中
//     usecartListStore().setCartList()
// }

// //會有一個func是刷新購物車頁面陣列顯示的部分
// export function Product(id) { }
// //計算總金額也預計在這裡做

// //之後會接PHP開關資料庫並insert跟update



// export const usecartListStore = defineStore({
//     id: "cart",
//     state: () => ({
//         cartList: [],
//     }),

//     actions: {
//         setCartList() {

//             console.log(show_product());
//             this.cartList = show_product()[0];

//         },

//     },
// });