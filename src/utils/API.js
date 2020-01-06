import axios from "axios";

export default {
    //Save article of clothing
    saveItem: function(itemData){
        return axios.post("/api/items", itemData)
    }
}