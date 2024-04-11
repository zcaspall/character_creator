import React from "react"

export default function NewChar() {
  function newchar(formData : FormData){
    const charname = formData.get("charater name")
    return(
      <form action = {newchar}>
        Character Name: <input name = "character name"/>
      </form>
    )
  }
}

//make sure the CID matches the character and ability scores properly
// may have to make scores JSON files to make it easier to add stats to DB