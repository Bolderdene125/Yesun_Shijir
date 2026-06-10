/**
 * form-validation.js — Form validation утилити
 *
 * Хэрхэн ашиглах:
 *   1. Форм элементэд data-validate="required|email|phone|min:8" гэж нэмнэ
 *   2. validateForm(formElement) дуудна → true/false буцаана
 *   3. showSuccess(formElement, message) — амжилтын мессеж харуулна
 *
 * Жишээ:
 *   <input data-validate="required|email" name="email" />
 */

(function () {
  'use strict';

  // ── Validation дүрмүүд ────────────────────────────────────────────────────
  const RULES = {
    required: function (val) {
      return val.trim().length > 0;
    },
    email: function (val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    },
    phone: function (val) {
      // Монгол утасны дугаар: 8 оронтой тоо
      return /^\+?[\d\s\-()]{7,15}$/.test(val.trim());
    },
    number: function (val) {
      return !isNaN(Number(val)) && val.trim() !== '';
    },
  };

  const MESSAGES_MN = {
    required: 'Энэ талбарыг заавал бөглөнө үү.',
    email:    'И-мэйл хаяг буруу байна. Жишээ: name@example.com',
    phone:    'Утасны дугаар буруу байна.',
    number:   'Тоон утга оруулна уу.',
  };

  const MESSAGES_EN = {
    required: 'This field is required.',
    email:    'Invalid email address. Example: name@example.com',
    phone:    'Invalid phone number.',
    number:   'Please enter a numeric value.',
  };

  function getMessages() {
    return (window.getCurrentLang && window.getCurrentLang() === 'en') ? MESSAGES_EN : MESSAGES_MN;
  }

  // ── Нэг талбарыг шалгах ───────────────────────────────────────────────────
  function validateField(input) {
    const rules   = (input.getAttribute('data-validate') || '').split('|').filter(Boolean);
    const value   = input.value;
    const msgs    = getMessages();
    let firstError = '';

    for (const rule of rules) {
      const [ruleName] = rule.split(':');
      const fn = RULES[ruleName];
      if (fn && !fn(value)) {
        firstError = msgs[ruleName] || `Алдаа: ${ruleName}`;
        break;
      }
    }

    // Error харуулах / нуух
    showFieldError(input, firstError);
    return firstError === '';
  }

  function showFieldError(input, message) {
    input.classList.toggle('error', !!message);

    // Талбарын дараах .form-error элементийг олно
    let errorEl = input.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'form-error';
      input.parentElement.appendChild(errorEl);
    }

    errorEl.textContent = message || '';
    errorEl.classList.toggle('visible', !!message);
  }

  // ── Бүтэн формыг шалгах ──────────────────────────────────────────────────
  function validateForm(formEl) {
    let isValid = true;
    const fields = formEl.querySelectorAll('[data-validate]');

    fields.forEach(function (field) {
      if (!validateField(field)) isValid = false;
    });

    // Эхний алдаатай талбар руу scroll
    if (!isValid) {
      const firstError = formEl.querySelector('[data-validate].error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
    }

    return isValid;
  }

  // ── Real-time validation (blur үед) ──────────────────────────────────────
  function attachRealTimeValidation(formEl) {
    formEl.querySelectorAll('[data-validate]').forEach(function (input) {
      // Focus хийхэд error арилгана
      input.addEventListener('focus', function () {
        showFieldError(input, '');
      });
      // Blur хийхэд шалгана
      input.addEventListener('blur', function () {
        validateField(input);
      });
      // Radio/checkbox-д change үед шалгана
      if (input.type === 'radio' || input.type === 'checkbox') {
        input.addEventListener('change', function () {
          validateField(input);
        });
      }
    });
  }

  // ── Success мессеж ────────────────────────────────────────────────────────
  function showSuccess(formEl, message) {
    // Форм нуух
    formEl.style.display = 'none';

    const successBox = document.createElement('div');
    successBox.className = 'alert alert-success animate-in';
    successBox.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:24px">check_circle</span>
      <div>
        <p style="font-weight:700;margin-bottom:4px">${message}</p>
        <p style="font-size:13px;opacity:0.8">${
          window.getCurrentLang && window.getCurrentLang() === 'en'
            ? 'Our team will contact you soon.'
            : 'Манай баг тантай удахгүй холбогдох болно.'
        }</p>
      </div>
    `;

    formEl.parentElement.insertBefore(successBox, formEl);

    // 5 секундын дараа форм дахин харуулна (optionally)
    // setTimeout(() => { formEl.style.display = ''; successBox.remove(); }, 5000);
  }

  // ── Global expose ─────────────────────────────────────────────────────────
  window.FormValidator = {
    validate:            validateForm,
    validateField:       validateField,
    attachRealTime:      attachRealTimeValidation,
    showSuccess:         showSuccess,
    showFieldError:      showFieldError,
  };
})();
