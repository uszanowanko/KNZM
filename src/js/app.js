const CategoryPanel = (props) => (
    <div className="category__item category__item--1">
        <div className="category__item--img">
            <h1 className="category__item--title">{props.title}</h1>
            <button className="category__item--btn">Czytaj</button>
        </div>
    </div>
)

const CategoriesSection = () => (
    <section className="categorySection">
     <div className="categorySection__row categorySection__firstRow">
        <CategoryPanel title = 'zostan partnerem' />
        <CategoryPanel title = 'dołącz do nas' />
        <CategoryPanel title = 'konferencja' />
    </div> 
    <div className="categorySection__row categorySection__secondRow">
        <CategoryPanel title = 'o nas' />
        <CategoryPanel title = 'nasza działalnosc' />
        <CategoryPanel title = 'zarząd' />
    </div> 
</section>
)
const MainSection = () =>  <CategoriesSection/>

   

ReactDOM.render(<MainSection/>, document.getElementById('root'))