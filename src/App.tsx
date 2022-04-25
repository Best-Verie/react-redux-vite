import { useState } from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from './feature/photos-slice'

function App() {

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [thumbNail, setThumbNail] = useState('')


  const {data, isLoading} = useFetchPhotosQuery()
  const [addPhoto, result] = useAddPhotoMutation()


  if(isLoading) {
    return <p>loading...</p>
  }


   function handleSubmit(){
     addPhoto({
       url,
       title,
       thumbnailUrl: thumbNail,
     })


     setTitle('')
     setUrl('')
     setThumbNail('')

     console.log({result})


     if(result.isSuccess){
       alert("Success")
     } 

     if(result.error){
       alert(result.error)
     }
   }





  return (
    <div>

      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <input type="text" placeholder="title" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input type="text" placeholder="image url" value={url} onChange={(e) => {
          setUrl(e.target.value)
        }} />
        <input type="text" placeholder="thumb nail" value={thumbNail} onChange={(e) => {
          setThumbNail(e.target.value)
        }}/>
        <input type="submit"  value="Submit"/>
      </form>

      <pre>
        <code>{JSON.stringify(data, null,2)}</code>
      </pre>
    
    </div>
  )
}

export default App
