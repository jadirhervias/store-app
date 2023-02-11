import Swal from "sweetalert2";

class Alert {
  static success(title, message) {
    Swal.fire(title, message, 'success');
  }

  static error(title, message) {
    Swal.fire(title, message, 'error');
  }
}

export default Alert;
