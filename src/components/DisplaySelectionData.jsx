import { fetchSelectionData } from '../modules/selectionData';
import React, {Component} from 'react';

class DisplaySeletionData extends Component {
    state = {
        selectionData: [],
    };

    componentDidMount = async () => {
        let selectionData = await fetchSelectionData();
        this.setState({ selectionData: selectionData });
    };

    render() {
        
    }
};