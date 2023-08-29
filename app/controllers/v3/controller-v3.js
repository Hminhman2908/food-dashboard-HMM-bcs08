export const URL = "https://64d6fb2c2a017531bc12e7f2.mockapi.io/food";
export const MON_CHAY = true;
export const CON_MON = true;

export let fetchListFood = () => {
  axios({
    url: URL,
    method: "GET",
  })
    .then((res) => {
      renderListItem(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export let renderListItem = (list) => {
  let createTr = "";
  list.reverse().forEach((item, index) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa } = item;
    createTr += `
        <tr>
            <td>${ma}</td>
            <td>${ten}</td>
            <td>${
              loai == MON_CHAY ? "Chay" : "<h6 class='text-danger'>Mặn</h6>"
            }</td>
            <td>${gia}</td>
            <td>${khuyenMai}</td>
            <td>0</td>
            <td>${
              tinhTrang == CON_MON ? "Còn" : "<h6 class='text-danger'>Hết</h6>"
            }</td>
            <td>
                <div class="container">
                    <button class="btn btn-warning" onclick="editItem(${ma})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteItem(${ma})">Dele</button>
                </div>
            </td>
        </tr>
    `;
  });
  document.getElementById("tbodyFood").innerHTML = createTr;
};

export function getTTTFormV3() {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value == "loai1";
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value == "1";
  let hinh = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinh,
    moTa,
    tinhGiaKM: function () {
      return this.gia * (1 - this.khuyenMai);
    },
  };
}

export let showTTTFormV3 = (item) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa } = item;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == MON_CHAY ? "loai1" : "loai2";
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang ? "1" : "0";
  document.getElementById("hinhMon").value = hinhMon;
  document.getElementById("moTa").value = moTa;
};

export let showMessage = (message, isSuccess = true) => {
  Toastify({
    text: "This is a toast",
    className: "info",
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};
