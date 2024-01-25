import { products } from '../../product_data.json';

export function show_product() {
    //因為畫面處理適用陣列去顯示資料,所以這邊用陣列
    let arrayOfObjects = [];

    //確保函數執行時localstorage必定有這個陣列
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // 從 localStorage 中獲取 cart 的值
    var cartJSON = localStorage.getItem('cart');

    // 將 cart 的 JSON 字串轉換為 JavaScript 陣列
    var cart = JSON.parse(cartJSON);

    cart.forEach(element => {
        // 使用 find 方法用cart的每個productId 去 products json 尋找符合特定 product_no 的商品
        //shownum類似元件概念
        var shownum = products.find(item => item.product_no == element.productId);
        if (shownum) {
            arrayOfObjects.push({ product_no: shownum.product_no, product_name: shownum.product_name, price: shownum.price, product_pic1: shownum.product_pic1, quantity: element.quantity });
        }
    });

    arrayOfObjects.sort((a, b) => {
        // 商品編號按照順序排列
        return a.product_no - b.product_no;
    });

    return arrayOfObjects;
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
}
//會有一個func是清除這個商品在陣列內

//會有一個func是刷新購物車頁面陣列顯示的部分

//計算總金額也預計在這裡做

//之後會接PHP開關資料庫並insert跟update