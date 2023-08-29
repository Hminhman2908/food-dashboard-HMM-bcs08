import {
  URL,
  fetchListFood,
  getTTTFormV3,
  showMessage,
  showTTTFormV3,
} from "./controller-v3.js";

fetchListFood();

// Delete
window.deleteItem = (id) => {
  axios
    .delete(`${URL}/${id}`)
    .then((res) => {
      fetchListFood(res.data);
      showMessage("Xoá thành công");
    })
    .catch((err) => {
      showMessage("Xoá thất bại", false);
    });
};

// Add
window.addItem = () => {
  let data = getTTTFormV3();
  axios
    .post(URL, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      showMessage("Thêm thành công");
      fetchListFood();
    })
    .catch((err) => {
      showMessage("Thêm thất bại", false);
    });
};

// Edit
window.editItem = (id) => {
  $("#exampleModal").modal("show");
  document.getElementById("foodID").readOnly = true;
  axios
    .get(`${URL}/${id}`)
    .then((res) => {
      showTTTFormV3(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
// Update
window.updateItem = (id) => {
  let data = getTTTFormV3();
  axios
    .put(`${URL}/${data.ma}`, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      showMessage("Cập nhật thành công");
      fetchListFood();
    })
    .catch((err) => {
      showMessage("Cập nhật thất bại", false);
    });
};
