import { Box, Button, Img } from '@chakra-ui/react'
import { init } from 'filestack-js'
import { PickerFileMetadata } from 'filestack-js/build/main/lib/picker'
import { useState } from 'react'
import { Link } from 'ui'

const client = init(process.env.NEXT_PUBLIC_FILESTACK_API_KEY ?? '')

export default function FileUploadExample() {
  const [imageUrl, setImageUrl] = useState('')
  const handleUploadFinished = (e: PickerFileMetadata) => {
    setImageUrl(e.url)
  }

  const handleOnClick = async () => {
    client
      .picker({
        onFileUploadFinished: handleUploadFinished,
      })
      .open()
  }
  return (
    <div>
      <Button onClick={handleOnClick}>Upload a file</Button>
      {imageUrl && <Img src={imageUrl} />}
      <Box>
        <Link href="/">Home</Link>
      </Box>
    </div>
  )
}
