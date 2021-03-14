import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


export function MessageSuccess(data) {
    Swal.fire({
        title: 'success!',
        text: data,
        type: 'success',
    })
}

export function MessageError(data) {
    Swal.fire({
        title: 'Oops!',
        text: data,
        type: 'error',
    })
}

export function MessageInfo(data) {
    Swal.fire({
        title: 'Oops!',
        text: data,
        type: 'info',
    })
}

export function MessageConfirmation(text, confirmAction, dismissAction) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete these items with " + text + ' ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (confirm) { confirmAction(confirm) }, function (dismiss) { dismissAction() })
}

export function UploadConfirmation(text, confirmAction, dismissAction) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to upload file " + text + ' ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (confirm) { confirmAction(confirm) }, function (dismiss) { dismissAction() })
}

export function messages(title = null, text = null, type = null, refresh = null) {
    Swal.fire({
        title: title,
        text: text,
        type: type
    }).then(function () {
        if (refresh)
            window.location.reload();
    });
}

export function deleteData(id, confirmDelete) {
    let result = false;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!'
    }).then(function (confirm) {
        confirmDelete(id)
    })
}

export function confirmation(id, confirmAction, dismissAction) {
    let result = false;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!'
    }).then(function (confirm) {
        confirmAction(id)
    }, function (dismiss) {
        dismissAction()
    })

}