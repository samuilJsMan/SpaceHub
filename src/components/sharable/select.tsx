import React from 'react';
import i18n from "i18next";
import { useState } from "react";


interface option{
  label: string;
  value: "en"|"ua";
}

interface selectProps {
  selectClass?: string;
  optionClass?: string;
  optionList: option[];
}

const Select: React.FC<selectProps> = ({ selectClass, optionClass, optionList }) => {
  const [lang, setLang] = useState<string>("English (US)");
  function changeLang(lang:"en"|"ua",name:string){
    i18n.changeLanguage(lang);
    setLang(name);
  }
  return (
    <div className={`select ${selectClass}`}>
      {lang}
      <div className={optionClass}>
        {optionList.map((option) => (
          <div className="option" key={option.label} onClick={changeLang.bind(null, option.value, option.label)}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;