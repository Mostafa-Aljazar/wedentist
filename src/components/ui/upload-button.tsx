"use client"

import { UploadDropzone } from "@/utils/uploadthing"

export default function CustomUploadBtn() {
  return (
    <main className="flex flex-col items-center justify-between p-4 ">
      <UploadDropzone
        className="w-full"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res)
          alert("Upload Completed")
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`)
        }}
        onUploadBegin={(name) => {
          // Do something once upload begins
          console.log("Uploading: ", name)
        }}
      />
    </main>
  )
}
