import Add from './images/plus.svg';
import Remove from './images/minus.svg';
import Cart from './images/addToCart.png';
import Star from './images/specialStar.png';
import Item1 from './images/chocoThunder.jpg';
import Item3 from './images/sprinkleStack.jpg';
import Item2 from './images/caramelCafecito.jpg';
import Item4 from './images/icedWhiteMochaLatte.jpg';
import Item6 from './images/classicMorningPerson.jpg';
import Item7 from './images/simpleEasy.jpg';
import Item8 from './images/theBigLunchBreak.jpg';
import Item5 from './images/blackberryDonutCappuccinoCombo.jpg';
import Coffee1 from './images/appleMocha.png';
import Coffee2 from './images/caramelFrapuccino.png';
import Coffee3 from './images/mintCondition.png';
import Coffee4 from './images/twinTowers.jpg';
import Coffee5 from './images/pecanFrapuccino.jpg';
import Coffee6 from './images/pineconeLatte.jpg';
import Coffee7 from './images/saltedCaramel.jpg';
import Coffee8 from './images/turtleMocha.png';
import Coffee9 from './images/dogScout.png';
import Coffee10 from './images/chocoLatte.jpg';
import Coffee11 from './images/oakDream.png';
import Coffee12 from './images/tenderHeart.png';
import Donut1 from './images/bismarck.png';
import Donut2 from './images/chocoDough.jpg';
import Donut3 from './images/crazedPeanuts.jpg';
import Donut4 from './images/cremeBrulee.png';
import Donut5 from './images/crossPeaches.png';
import Donut6 from './images/glazedSpread.jpg';
import Donut7 from './images/goldenBowl.jpg';
import Donut8 from './images/peanutButterBrownie.png';
import Donut9 from './images/powDough.jpg';
import Donut10 from './images/strawberryFrosted.png';
import Donut11 from './images/theNinthHeaven.jpg';
import Donut12 from './images/boxedGoods.jpg';


const data = {
    "setItems": [
        {'item': Item1, 'name': 'specials', 'title': 'Choco-Berry Thunder', 'price': 250, 'insert': Cart, 'description': 'Six-pack of donuts drizzled in chocolate topped of with rasberries.', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 1},
        {'item': Item2, 'name': 'specials', 'title': 'Caramel Cafecito', 'price': 175, 'insert': Cart, 'description': 'Steaming cup of caramel-flavoured caffine with steamed oat milk.', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 2},
        {'item': Item3, 'name': 'specials', 'title': 'The Sprinkled Stack', 'price': 299, 'insert': Cart, 'description': 'Three donuts doused in rainbow-colored sprinkles, bursting with happy flavors and bright colors.', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 3},
        {'item': Item4, 'name': 'specials', 'title': 'Iced White Mocha Latte', 'price': 100, 'insert': Cart, 'description': 'Tall glass of White Mocha Flavoured latte with ice cubes and a glass/silicone/metal straw for aesthetic pleasure.', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 4},
        {'item': Item5, 'name': 'specials', 'title': 'Blackberry Donut Capuccino Combo', 'price': 230, 'insert': Cart, 'description': 'A blackberry donut with two capuccinos. Perfect for an afternoon out with friends. ', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 5},
        {'item': Item6, 'name': 'specials', 'title': 'The Morning Person', 'price': 210, 'insert': Cart, 'description': '   A classic Grab\'n\'Go for that busy worker to help start the day right or a quick lunch break. ', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 6},
        {'item': Item7, 'name': 'specials', 'title': "Simple Easy", 'price': 105, 'insert': Cart, 'description': 'Perfect way to spend a cozy afternoon staring out the coffee shop glass walls. Asthetic', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 7},
        {'item': Item8, 'name': 'specials', 'title': "The Big Lunch Break", 'price': 223, 'insert': Cart, 'description': 'A refuel lunch for recharging the batteries and getting back to work refreshed.', 'star': Star, 'cart': Add, 'remove': Remove, 'id': 8},
        {'item': Coffee1, 'name': 'coffee', 'title': 'Apple Mocha', 'price': 15, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '9' },
        {'item': Coffee2, 'name': 'coffee', 'title': 'Caramel Frapuccino', 'price': 45, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '10' },
        {'item': Coffee3, 'name': 'coffee', 'title': 'Mint Condition', 'price': 20, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '11' },
        {'item': Coffee4, 'name': 'coffee', 'title': 'Twin Towers', 'price': 100, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '12' },
        {'item': Coffee5, 'name': 'coffee', 'title': 'Pecan Frapuccino', 'price': 70, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '13' },
        {'item': Coffee6, 'name': 'coffee', 'title': 'Pinecone Latte', 'price': 200, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '14' },
        {'item': Coffee7, 'name': 'coffee', 'title': 'Salted Caramel', 'price': 310, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '15' },
        {'item': Coffee8, 'name': 'coffee', 'title': 'Turtle Mocha', 'price': 20, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '16' },
        {'item': Coffee9, 'name': 'coffee', 'title': 'The Dog Scout', 'price': 70, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '17' },
        {'item': Coffee10, 'name': 'coffee', 'title': 'Choco Latte', 'price': 69, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '18' },
        {'item': Coffee11, 'name': 'coffee', 'title': 'Oak Dream', 'price': 47, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '19' },
        {'item': Coffee12, 'name': 'coffee', 'title': 'Tender Heart', 'price': 56, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '20'},
        {'item': Donut1, 'name': 'donut', 'title': 'Bismarck', 'price': 20, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '21' },
        {'item': Donut2, 'name': 'donut', 'title': 'Choco Dough', 'price': 15, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '22' },
        {'item': Donut3, 'name': 'donut', 'title': 'Crazed Peanuts', 'price': 40, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '23' },
        {'item': Donut4, 'name': 'donut', 'title': 'Creme Brulee', 'price': 33, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '24' },
        {'item': Donut5, 'name': 'donut', 'title': 'Cross Peach', 'price': 49, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '25' },
        {'item': Donut6, 'name': 'donut', 'title': 'Glazed Spread', 'price': 57, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '26' },
        {'item': Donut7, 'name': 'donut', 'title': 'Golden Bowl', 'price': 99, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '27' },
        {'item': Donut8, 'name': 'donut', 'title': 'Peanut Butter Brownie', 'price': 31, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '28' },
        {'item': Donut9, 'name': 'donut', 'title': 'Pow Dough', 'price': 76, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '29' },
        {'item': Donut10, 'name': 'donut', 'title': 'Strawberry Frosted', 'price': 16, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '30' },
        {'item': Donut11, 'name': 'donut', 'title': 'The Ninth Heaven', 'price': 100, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '31' },
        {'item': Donut12, 'name': 'donut', 'title': 'Boxed Goods', 'price': 70, 'insert': Cart, 'cart': Add, 'remove': Remove, 'id': '32' },
    ]
    
}

export default data;