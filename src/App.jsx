import { useEffect, useRef, useState } from 'react'
import { Card } from './components/card/card';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { Loader } from './components/loader/loader';
function App() {

  const [data, setdata] = useState([]);
  const [loader,setloader] =useState(true)
  const inputRef = useRef('');
 const selectRef = useRef('');
  function Getdata() {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setdata(data);
         setloader(false);
      })
      .catch(error => console.log(error))

  }

  useEffect(() => {
    Getdata();
  }, []
  )


  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${inputRef.current.value}`)
      .then(res => res.json())
      .then(data => {
        if(inputRef.current.value !==''){
          setdata(data)
        }
      })
      .catch(error => console.log(error))
  }


  function handleSlect(evnt) {
    evnt.preventDefault();
    fetch(`https://restcountries.com/v3.1/region/${selectRef.current.value}`)
      .then(res => res.json())
      .then(data => {
        if(selectRef.current.value !==''){
          setdata(data)
        }
      })
      .catch(error => console.log(error))
  }

  return (
   <> 
   {loader && <Loader/>}
  { !loader &&(
   <div>
      <Header />
      <Form handleSearch={handleSearch} inputRef={inputRef} selectRef={selectRef} handleSlect={handleSlect} />
      <div className='container'>
        <ul className='d-flex gap-5 list-unstyled justify-content-between m-0 mt-5 p-0 flex-wrap'>
          {data.map((item) => {
              return <Card 
                flag={item.flags.svg}
                key={item.name.common}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            })}

        </ul>

      </div>

    </div>
    )}
   </>
  );
}

export default App
