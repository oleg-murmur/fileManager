import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import './SelectFileButton.css'

interface Props{
    setDataFile: Dispatch<SetStateAction<File>>,
    name?: string | 'Добавить';
    type?: string;
    accept?: string[] | '.txt';
}

const SelectFileButton = ({setDataFile, name,type,accept}:Props) => {


    if(accept && Array.isArray(accept)) {
        accept.join(',')
    }

    

    let nameButton = name ?? 'Добавить'

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files

        if(!event.target.files?.length) {
            console.log('nonono')
            return
        }
        if (files) {
             setDataFile(files[0])
          }else{
            throw new Error("Ошибка при загрузке файла или файл не выбран")
          }

      };


    return (
        <div >
                <label htmlFor="file-input" className="SelectFileButton">
                    {nameButton}
                </label>


            <input 
                id="file-input" 
                type={`${type}`} 
                multiple={true}
                accept={`${accept}`} 
                onChange={handleFileChange} 
                style={{ display: "none" }} 
            />
        </div>
    )
}

export default SelectFileButton
