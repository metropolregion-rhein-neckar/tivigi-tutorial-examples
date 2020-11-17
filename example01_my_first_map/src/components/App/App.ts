import { Component, Vue } from 'vue-property-decorator';

//################ BEGIN Data imports #################
import Data from 'tivigi/src/components/data/Data/Data'
import DataJsonFetch from 'tivigi/src/components/data/DataJsonFetch/DataJsonFetch'

import DataMap from 'tivigi/src/components/gis/data/DataMap/DataMap'
import DataMapLayer from 'tivigi/src/components/gis/data/DataMapLayer/DataMapLayer'


//################ END Data imports #################

//################ BEGIN Tivigi imports #################
import Modal from 'tivigi/src/components/Modal/Modal'
import Superbutton from 'tivigi/src/components/Superbutton/Superbutton'
import Superinput from 'tivigi/src/components/Superinput/Superinput'
import Tooltip from 'tivigi/src/components/Tooltip/Tooltip'
import MapPanel from 'tivigi/src/components/gis/MapPanel/MapPanel'
//################ END Tivigi imports #################


//############## BEGIN Tivigi components ###############
import Collapsible from 'tivigi/src/components/Collapsible/Collapsible'
import DropdownButton from 'tivigi/src/components/DropdownButton/DropdownButton'
import DropdownMenu from 'tivigi/src/components/DropdownMenu/DropdownMenu'
import FlexCol from 'tivigi/src/components/FlexCol/FlexCol'
import FlexRow from 'tivigi/src/components/FlexRow/FlexRow'
import FloatingWindow from 'tivigi/src/components/FloatingWindow/FloatingWindow'
import ProgressBar from 'tivigi/src/components/ProgressBar/ProgressBar'
import Slide from 'tivigi/src/components/Slideshow/Slide'
import Slideshow from 'tivigi/src/components/Slideshow/Slideshow'
import Toolbar from 'tivigi/src/components/Toolbar/Toolbar'
import Tree from 'tivigi/src/components/Tree/Tree'
//############## END Tivigi components ###############

//######################## BEGIN tivigi GIS imports ###########################
import ActiveLayers from 'tivigi/src/components/gis/ActiveLayers/ActiveLayers'
import AttributesTable from 'tivigi/src/components/gis/AttributesTable/AttributesTable'
import FeatureInfoTool from 'tivigi/src/components/gis/FeatureInfoTool/FeatureInfoTool'
import FeatureSelectTool from 'tivigi/src/components/gis/FeatureSelectTool/FeatureSelectTool'

import LayerTree from 'tivigi/src/components/gis/LayerTree/LayerTree'
import LocationInput from 'tivigi/src/components/gis/LocationInput/LocationInput'
import LocationSearch from 'tivigi/src/components/gis/LocationSearch/LocationSearch'
import MapLoadingProgressBar from 'tivigi/src/components/gis/MapLoadingProgressBar/MapLoadingProgressBar'
import MapOverlay from 'tivigi/src/components/gis/MapOverlay/MapOverlay'
import MapPrint from 'tivigi/src/components/gis/MapPrint/MapPrint'
import MapScale from 'tivigi/src/components/gis/MapScale/MapScale'
import MeasureTool from 'tivigi/src/components/gis/MeasureTool/MeasureTool'
import MouseCoordinatesTool from 'tivigi/src/components/gis/MouseCoordinatesTool/MouseCoordinatesTool'
import MyLocationTool from 'tivigi/src/components/gis/MyLocationTool/MyLocationTool'
import SetMapExtentTool from 'tivigi/src/components/gis/SetMapExtentTool/SetMapExtentTool'
//######################## END tivigi GIS imports ###########################

import TreeNode from 'tivigi/src/components/TreeNode/TreeNode'


//######################## BEGIN other tivigi imports ###########################
import * as dataStore from 'tivigi/src/util/dataStore'
//######################## END other tivigi imports ###########################



import WithRender from './App.html';
import './App.scss'


@WithRender
@Component({
    components: {
        

        //############## BEGIN Data components ################
        DataMap,
        DataMapLayer,
        Data,
        DataJsonFetch,                    
        //############## END Data components ################

     
        //############## BEGIN GIS components ################
        ActiveLayers,
        FeatureInfoTool,
        FeatureSelectTool,   
        LayerTree,     
        LocationInput,
        LocationSearch,
        MapLoadingProgressBar,        
        MapPanel,
        MapOverlay,
        MapPrint,
        MapScale,
        MeasureTool,
        MouseCoordinatesTool,
        MyLocationTool,
        SetMapExtentTool,
        //############## END GIS components ################

        //################# BEGIN Misc tivigi components #############        
        AttributesTable,
        Collapsible,
        DropdownButton,
        DropdownMenu,
        FlexCol,
        FlexRow,
        FloatingWindow,        
        Modal,
        ProgressBar,
        Slide,
        Slideshow,
        Toolbar,
        Superbutton,
        Superinput,
        Tooltip,
        Tree,
        TreeNode,
        //################# END Misc tivigi components #############
    }
})
export default class App extends Vue {

    get global(): any {
        return dataStore.store
    }
  
    local: any = {}
}
