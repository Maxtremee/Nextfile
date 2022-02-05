import React from "react"
import FileGrid from "../src/components/FileGrid"
import readDir from "../src/utils/readDir"

export default function Index({ files }) {
  return <FileGrid files={files} />
}

export async function getServerSideProps(context) {
  const { path } = context.req.url
  const { locales } = context
  const files = await readDir(path, locales)

  return {
    props: {
      files,
    },
  }
}
