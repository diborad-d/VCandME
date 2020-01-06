import axios from "axios";

export default {
    //Save item of clothing to database
    saveItem: function(itemData){
        return axios.post("/api/items", itemData);
    }
}