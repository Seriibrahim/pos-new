
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('ar');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState('1234');
  const [showChange, setShowChange] = useState(false);
  const [newPass, setNewPass] = useState('');

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleLogin = () => {
    if (password === adminPassword) setLoggedIn(true);
    else alert(t('wrong_password'));
  };

  const handleChangePassword = () => {
    setAdminPassword(newPass);
    setShowChange(false);
    alert(t('success'));
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: '2rem', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        <button onClick={toggleLang}>{t('toggle_lang')}</button>
        <h2>{t('login')}</h2>
        <input
          type="password"
          placeholder={t('enter_password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>{t('login')}</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <button onClick={toggleLang}>{t('toggle_lang')}</button>
      <h2>{t('welcome')}</h2>
      <button onClick={() => setLoggedIn(false)}>{t('logout')}</button>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setShowChange(!showChange)}>{t('change_password')}</button>
        {showChange && (
          <div style={{ marginTop: '1rem' }}>
            <input
              type="password"
              placeholder={t('new_password')}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <button onClick={handleChangePassword}>{t('save')}</button>
          </div>
        )}
      </div>
    </div>
  );
}
