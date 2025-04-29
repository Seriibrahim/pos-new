
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: "Login",
        enter_password: "Enter password",
        wrong_password: "Incorrect password",
        toggle_lang: "العربية",
        logout: "Logout",
        welcome: "Welcome to the POS System",
        change_password: "Change Password",
        new_password: "New Password",
        save: "Save",
        success: "Password updated successfully!"
      }
    },
    ar: {
      translation: {
        login: "دخول",
        enter_password: "أدخل كلمة المرور",
        wrong_password: "كلمة المرور غير صحيحة",
        toggle_lang: "English",
        logout: "تسجيل الخروج",
        welcome: "مرحبًا بك في نظام نقاط البيع",
        change_password: "تغيير كلمة المرور",
        new_password: "كلمة مرور جديدة",
        save: "حفظ",
        success: "تم تحديث كلمة المرور بنجاح!"
      }
    }
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false }
});

export default i18n;
