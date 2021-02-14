import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import style from './index.module.css';
import IngredientsList from './ingredientsList/index';
import DirectionsList from './directionsList/index';
import RecipeData from './recipeData';
import UserActs from './userActs/index';
import deleteRecipe from '../../../controllers/recipes/DELETE/deleteRecipe';
import Context from '../../../context/userContext';
import Comments from './comments/index';
import AddComment from './addComment/index';
import { useHistory } from 'react-router-dom';

const CurrentRecipe = ({ data, changed }) => {

    const context = useContext(Context);
    const logged = context.user !== 'guest'
    const history = useHistory()
    const currentUsedId = context.user._id;
    const recipeCreator = data.creatorId;
    const isCreator = !!(currentUsedId === recipeCreator);

    const [showIng, setShowIng] = useState(false);
    const [showDir, setShowDir] = useState(false);

    const likeAndComment = () => {

        if (!logged) {
            return (
                <div>
                    <h4 className={style.login_msg}>You must login first to comment and like recipes</h4>
                </div>
            )
        }

        return (
            <div>
                <AddComment
                    changed={changed}
                    recipeId={data._id}
                    recipeCreatorId={data.creatorId}
                    commentatorId={currentUsedId}
                    username={context.user.username}
                    profilePicURL={context.user.profilePictureURL}
                />
                <UserActs recipeId={data._id} />
            </div>
        )
    }

    const handleDelete = () => {
        deleteRecipe(recipeCreator, data._id).then(resp => {
            if (resp.statusText === "OK") {
                console.log('deleted')
                history.goBack();
            } else {
                // TODO handle err page!
            }
        })
    }

    const handleShowHide = (menuName) => {
        if (menuName === 'ingredients') {
            setShowIng(!showIng);
        } else if (menuName === 'directions') {
            setShowDir(!showDir);
        }
    }

    const ingredients = JSON.parse(data.ingredients);
    const directions = JSON.parse(data.directions);

    return (
        <div>
            <div className="row justify-content-center mt-3 ">

                <Button className={style.backBtn} onClick={() => history.goBack()}
                    size="lg" variant="info" > <span>&#8249;</span> Back</Button>

                {isCreator === true
                    ?
                    <Button className={style.delBtn} size="lg" variant="primary" onClick={handleDelete}>
                        <span>X</span> Delete</Button>
                    : ''
                }
            </div>
            <Row >

                <h2 className={style.name}>{data.recipeName}</h2>

                <Col lg={5}>
                    <img className={style.current_image} src={data.image} alt="ciganin" />
                </Col>
                <Col >
                    <RecipeData
                        description={data.description}
                        prepTime={data.prepTime}
                        cookTime={data.cookTime}
                        difficulty={data.difficulty}
                    />
                </Col>
            </Row>

            <IngredientsList data={ingredients} func={handleShowHide} show={showIng} />
            <DirectionsList data={directions} func={handleShowHide} show={showDir} />
            {/* implement show hide comments */}
            <Comments
                changed={changed}
                recipeCreatorId={data.creatorId}
                data={data.comments}
                recipeId={data._id}
            />
            {/* add comment data to Comments component */}

            {likeAndComment()}

        </div>
    )
}

export default CurrentRecipe;