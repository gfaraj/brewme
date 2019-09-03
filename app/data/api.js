import { RECIPES_API_URL } from "../../cfg";
import { HISTORY_API_URL } from "../../cfg";
import { EQUIPMENT_API_URL } from "../../cfg";

export async function getRecipes() {
    try {
        let response = await fetch(RECIPES_API_URL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getRecipeById(id) {
    try {
        let response = await fetch(`${RECIPES_API_URL}/${id}`);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getBrewHistory() {
    try {
        let response = await fetch(HISTORY_API_URL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getEquipment() {
    try {
        let response = await fetch(EQUIPMENT_API_URL);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}