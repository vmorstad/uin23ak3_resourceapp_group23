import { useEffect } from 'react'
import '../assets/ressurser'

export default function ResourceNav({ resources, showResourceContent }) {
    return (

        useEffect(() => {
            if (resources && resources.length > 0) {
              resources.forEach(resource => {
                const listItem = document.createElement('li')
                listItem.textContent = resource.category
                listItem.addEventListener('click', () => showResourceContent(resource))
                resourceNav.appendChild(listItem)
              })
        
              showResourceContent(resources[0])
            }
          }, [resources, showResourceContent])
        
        }
    }
}

