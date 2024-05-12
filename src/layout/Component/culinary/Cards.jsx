import { useNavigate } from 'react-router-dom';

function Cards() {
    const navigate = useNavigate()
    return (
        <>
        <div className="flex justify-center">                
            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px text-sm">
                <li>
                  <a onClick={'/page1'} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-blue-100 hover:text-blue-700">1</a>
                </li>
                <li>
                  <a onClick={'/page2'} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-blue-100 hover:text-blue-700">2</a>
                </li>
                <li>
                  <a onClick={'/page3'} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-blue-100 hover:text-blue-700">3</a>
                </li>
              </ul>
            </nav>
        </div>
        </>
    )
}

export default Cards;