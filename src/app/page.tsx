"use client";
import Image from 'next/image'
import Header from '@/components/Header'
import banner from "../../public/banner.jpeg"
import { finished } from 'stream';


export default function Home() {
  const name = "stroud";
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("/api/user", {
        headers: {
          Accept: "application/json",
          method: "GET",
        }
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch(error) {
      console.log(error)
    } finally {
      console.log("finished")
    }
  }
  return (
  
    <main>
        <Header name={name} age={23} />
        <h1>
        Hello World from docker container
        </h1>

      <Header>
        A mesage from home to header passing child
      </Header>
      <Image quality={60} src={banner} alt='banner'/>
      <button onClick={fetchDataFromApi} className='w-90 bg-blue-700 p-3 m-3'>
        fetch from api
      </button>
    </main>
  )
}
