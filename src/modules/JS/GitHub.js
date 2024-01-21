import React from 'react'
import GitBtn from '../../components/JS/GitBtn'

export default function GitHub() {
  const linkNameArr = [
    'Medical Center Website',
    'Supermarket Website',
    'Tic-Tac',
    'Todo List',
    'Quize',
    'Golden Shark Website',
    'Audio Player'
  ]

  const linkArr = [
    'https://github.com/ParuyrBaghyan/clinic',
    'https://github.com/ParuyrBaghyan/albo.github.io',
    'https://github.com/ParuyrBaghyan/TicTcac',
    'https://github.com/ParuyrBaghyan/TodoList',
    'https://github.com/ParuyrBaghyan/quize',
    'https://github.com/ParuyrBaghyan/GoldenShark',
    'https://github.com/ParuyrBaghyan/Player'
  ]

  return (
    <div className='GitHub-container'>
      <h2>Projects Github Links</h2>
      <div>
        <GitBtn linkNameArr={linkNameArr} linkArr={linkArr} />
      </div>
    </div>
  )
}
