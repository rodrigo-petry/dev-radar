import React from 'react';

import './styles.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>

      <div className="card-bio">
        <p>{dev.bio}</p>
      </div>

      <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
    </li>
  );
}

export default DevItem;