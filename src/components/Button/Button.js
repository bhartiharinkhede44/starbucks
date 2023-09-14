import './../../index.css'
export default function Button({btnName, CustomBtn}){

    return(
        <>
        <button className={` btn-sm-rounded btn-green fw-bold ${CustomBtn} `}>{btnName}</button>
        </>
    )

}