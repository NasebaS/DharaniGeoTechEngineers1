import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchableDropDown from '../Components/SearchableDropDown'
import AutoCompleteInput from '../Components/AutoCompleteInput'

const EditMaterialRequest = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown />
      {/* <AutoCompleteInput/> */}
    </View>
  )
}

export default EditMaterialRequest

const styles = StyleSheet.create({})