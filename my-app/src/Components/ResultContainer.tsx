import React, { SetStateAction, useState } from 'react'
import SelectFileButton from '../UI/Buttons/SelectFileButton';

const ResultContainer = () => 
{

    const [dataFile, setDataFile] = useState({})
    const [data, setData] = useState([])

    const CallBackFile = (result: SetStateAction<File>) => {
        setDataFile(result)
        readTxt(result)
    }
    
    console.log(dataFile)

    function readTxt(file: any) {
        // Check if the file is an txt.
        if (file.type && !file.type.startsWith('text/')) {
          console.log('File is not an txt.', file.type, file);
          return;
        }

        interface obj {
            name: any;
            value: any;
        }

        const test: obj[] = []

        const reader = new FileReader();
        // reader.onload = ev => {
        //     console.log(ev.target?.result)
        //     setData(ev.target?.result)
        // }
        reader.onload = function(e) {
            const contents = e.target?.result;
            const rows = (contents as string).split('\n');
            
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].split(';');
                for (let j = 0; j < columns.length; j++) {
                    let object = {
                        name: i + 1,
                        value: columns[j],
                    }
                    test.push(object)
                //   const outputDiv = document.getElementById('outputColumn' + (j+1));
                //   outputDiv.textContent += columns[j] + "<br>";
                }
            }
          };
        reader.readAsText(file);
        console.log(test)
      }
      

    return (
        <div>
            <SelectFileButton  setDataFile={CallBackFile} type={'file'} accept={['.png', '.jpg', '.txt']}/>
            <div className="">{data}</div>
        </div>
    )
}

export default ResultContainer
