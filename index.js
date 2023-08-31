// Tạo chuỗi và khai báo chuỗi
        // ==> Tạo chuỗi arrTong

var arrTinhToan = [];
        // ==> Tạo function thêm phần tử vào chuỗi
function add__Child(){
    var child = document.getElementById("themPhanTu").value;
    arrTinhToan.push(child);
    document.getElementById("hienThiMang").innerHTML = arrTinhToan;
}
var arrTong = arrTinhToan;
console.log("aaaaaaaaaaa",arrTong);
// ----Bài 1----

function demSoDuong(){
    var soDuong = 0;
    for(var i=0;i < arrTong.length;i++)
    {
        if(arrTong[i] > 0)
        {
            soDuong++;
            document.getElementById("soSoDuong").innerHTML = soDuong;
        }
    }
};

// ----Bài 2----

function tongSoDuong(){
    var tongSoDuong = 0;
    for(var i=0;i < arrTong.length;i++)
    {
        if(arrTong[i] > 0)
        {
            tongSoDuong +=+ arrTong[i];
            document.getElementById("tongSoSoDuong").innerHTML = tongSoDuong;
        }
    }
}

// ----Bài 3----

function timSoNhoNhat(){
    function findMinMax(arr,n)
    {
        let mini = arr[0];
        let maxi = arr[0];
     
        for (let i = 0; i < n; i++) {
            if (arr[i] < mini) {
                mini = arr[i];
            }
            else if (arr[i] > maxi) {
                maxi = arr[i];
            }
        }
        let ans = {
            "first":mini,
            "second":maxi
        }
        return ans;
    }
     
        let arr = arrTong;
        let N = arr.length;
     
        // Function Call
        let ans = {};
        ans = findMinMax(arr, N);
        document.getElementById("so_Nho_Nhat").innerHTML = ans.first;
}


// ----Bài 4----


var arrTong4 = arrTong;
var arrTongDuong = [];
for (var i = 0; i < arrTong4.length; i++)
{
    if(arrTong4[i] > 0)
    {
        arrTongDuong.push(arrTong4[i]);
    }
}
var tongSoDuongMax = arrTongDuong;
var soDuongMax = "";
for(var i=0;i<tongSoDuongMax.length;i++)
{
    if(tongSoDuongMax[i] > soDuongMax)
    {
        soDuongMax = tongSoDuongMax[i];  
    }
}

function timSoDuongNhoNhat(){
    var soDuongMin = soDuongMax;
    for(var i=0;i<arrTongDuong.length;i++)
    {
        if(arrTongDuong[i] < soDuongMin)
        {
            soDuongMin = arrTongDuong[i];
            document.getElementById("so_Duong_Nho_Nhat").innerHTML = soDuongMin;
        } 
        
    }
};


// ----Bài 5----
function timSoChanCuoiCung(){
    for(var i=0; i<arrTong.length; i++)
    {
        if(arrTong[i] % 2 === 0)
        {   
            document.getElementById("so_Chan_Cuoi_Cung").innerHTML = `${arrTong[i]}`;
        }
    }
};

// ----Bài 6----

function doiCho(){
    var x = document.getElementById("vi__Tri__1").value;
    var y = document.getElementById("vi__Tri__2").value;

    var viTri__1 = arrTong[x];
    var viTri__2 = arrTong[y];
    console.log(viTri__1, viTri__2);
    arrTong[x] = viTri__2;
    arrTong[y] = viTri__1;
    document.getElementById("viTriSauKhiDoi").innerHTML = `${arrTong}`;
};


// ----Bài 7----
var sapXepAll = arrTong;
function sapXep(){
    var size = sapXepAll.length;
    for (var step = 0; step < size - 1; step++) {
      var min_idx = step;
  
      for (var i = step + 1; i < size; i++) {
  
        // To sort in descending order, change > to < in this line.
        // Select the minimum element in each loop.
        if (sapXepAll[i] < sapXepAll[min_idx]) {
          min_idx = i;
        }
      }
  
      // put min at the correct position
      var temp = +sapXepAll[step];
      sapXepAll[step] = +sapXepAll[min_idx];
      sapXepAll[min_idx] = +temp;
      document.getElementById("viTriSauKhiSapXep").innerHTML = `${sapXepAll}`;
    }
};

// ----Bài 8----
function tim_SNT(){
/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0;
    
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}

let array = arrTong;
let array1 = [];
/*Tìm và liệt kê các số nguyên tố trong mảng*/
for (let i = 0; i < array.length; i++){
  if (isprime(array[i]) == 1)
  {array1.push(array[i]);}
  console.log("số nguyên tố đầu tiên", array1[0] );
  document.getElementById("kiemTraSoNT").innerHTML = `
  Số Nguyên Tố Đầu Tiên Là ${array1[0]}`;
}
}



// ----Bài 9----

function kiemTraSN(){
function timSoNguyen(n){
    //flag = 1 => là số nguyên
    //flag = 0 => không phải là số nguyên

    let flag = 1;
    if (Math.ceil(n) != Math.floor(n)) flag = 0;
    return flag;
}

let array = arrTong;
 check=0,total=0,arrSoNguyen = [];
for(let i = 0; i < array.length; i++){
    check = timSoNguyen(array[i]);
    if( check == 1 ) {
        total=i + 1;
        arrSoNguyen.push(array[i]);
    }
}
document.getElementById("kiemTraSoNguyen").innerHTML = `
Số Số Nguyên Trong Mảng Là: ${total}`;
document.getElementById("daySoNguyen").innerHTML = `
Dãy Số Nguyên Trong Mảng Là: ${arrSoNguyen}`;
}

// ----Bài 10----

var arrBai10 = arrTong;
function SoNguyen(n){
    //flag = 1 => là số nguyên
    //flag = 0 => không phải là số nguyên

    let flag = 1;
    if (Math.ceil(n) != Math.floor(n)) flag = 0;
    return flag;
}
let kiemTra = 0; arrNguyen = [];
for(let i = 0; i < arrBai10.length; i++)
{
    kiemtra = SoNguyen(arrBai10[i]);
    {
        if(kiemtra == 1)
        {
            arrNguyen.push(arrBai10[i]);
        }
    }
}


function soSanhSoSoNguyen(){
    function amDuong(n){
        //flag = -1 => số âm
        //flag =  0 =>  số 0
        //flag =  1 => số dương
    
        let flag = 0;
        if (n >0 ) flag = 1;
        else if (n<0) flag = -1;
        return flag;
    }
    let kiemtra = 0, am = [], duong = [];
    for (let i = 0 ; i < arrNguyen.length ; i++)
    {
    let kiemtra = amDuong(arrNguyen[i]);
    if (kiemtra < 0 )
        {
            am++;
            duong = arrNguyen.length - am;
        }
        document.getElementById("SoSoAm").innerHTML = `
        Số Số Nguyên Âm Trong Mảng Là: ${am}`;
        document.getElementById("SoSoDuong").innerHTML = `
        Dãy Số Nguyên Dương Trong Mảng Là: ${duong}`;
    }
}
