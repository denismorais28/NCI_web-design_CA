// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        console.log(form);
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  // 在页面加载时弹出弹窗
  $(document).ready(openModal);

  const overlay = $('.overlay');
  const modal = $('.modal');

  function openModal() {
    overlay.show();
    modal.show();
  }

  function closeModal(isYes) {
    if (isYes) {
      // 用户选择了是
      alert('用户选择了是');
    } else {
      // 用户选择了否
      alert('用户选择了否');
    }

    // 关闭弹窗
    overlay.hide();
    modal.hide();
  }
