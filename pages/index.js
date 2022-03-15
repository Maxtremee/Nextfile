import React from "react"
import Main from "../src/components/layout/Main"
import readDirectory from "../src/utils/readDirectory"

export default function Index(props) {
  return <Main {...props}  />
}

export async function getServerSideProps(context) {
  const { locales } = context
  const files = await readDirectory("", true, locales)

  return {
    props: {
      files
    },
  }
}
