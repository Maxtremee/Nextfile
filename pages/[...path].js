import React from "react"
import FileGrid from "../src/components/FileGrid"
import readDir from "../src/utils/readDir"

export default function Path({ files }) {
  return <FileGrid files={files} />
}

export async function getServerSideProps(context) {
  const { path } = context.req.url
  const files = readDir(path)

  return {
    props: {
      files,
    },
  }
}
