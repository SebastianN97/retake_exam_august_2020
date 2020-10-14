import axios from 'axios';

const fetchSelectionData = async () => {
    let selectionsData = await axios.get("/selections");
    return selectionsData.data.viaplay_sections;
};

export { fetchSelectionData };