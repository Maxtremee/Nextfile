import React from "react"
import FileGrid from "../src/components/FileGrid"
import readDir from "../src/utils/readDir"

export default function Index({ files }) {
  return (
    <FileGrid files={files} />
  )
}

export async function getServerSideProps(context) {
  const files = readDir()

  return {
    props: {
      files,
    },
  }
}
