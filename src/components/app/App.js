import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RecipeDetails from '../../pages/RecipeDetails';
import RecipesMain from "../../pages/recipesMain/RecipesMain";


const App = () => {

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<RecipesMain/>}/>
                    <Route path="/details" element={<RecipeDetails/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;