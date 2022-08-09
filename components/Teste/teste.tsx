import { FC } from 'react'
import style from './Login.module.css'
interface MeuDeus{
    name: string;
    children?:string;
    value:string;
}
const Teste: React.FC<{name:string,children?:"N/AN",value:string}> = ({name,children,value}) => {
    return (
        <>
            <div className={style.alinhas}>
                <div className={style.loginBox}>
                    <input className={style.input} type="text"  placeholder={value}/>
                    <input className={style.input} type="text"  placeholder={name}/>
                </div>
            </div>
        </>
    )
}

export default Teste