import React from 'react';
import himanshu from './SumMenu.module.css';
export default function SumMenu({ subMenu }) {
  return (
    <div className={himanshu.seconddiv}>
      <div className={himanshu.men}>
        {subMenu.map((line) => (
          <div className={himanshu.lol}>
            <ul className={himanshu.form}>
              {line.map((box, boxIndex) => (
                <>
                  <li className={himanshu.cname}>{box.title}</li>
                  {box?.items?.length > 0 &&
                    box.items.map((item) => (
                      <li className={himanshu.hrr}>{item.title}</li>
                    ))}
                  {boxIndex < line.length - 1 && box?.items?.length > 0 && (
                    <div className={himanshu.line}></div>
                  )}
                </>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
