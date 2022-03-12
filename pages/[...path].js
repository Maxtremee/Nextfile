import React from "react"
import Main from "../src/components/layout/Main"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Path(props) {
  return <Main {...props} />
}

export async function getServerSideProps(context) {
  const { locales } = context
  console.time('subpage')
  const folderStructure = await readFolderStructure(locales)
  console.timeEnd('subpage')

  return {
    props: {
      folderStructure
    },
  }
}
