export const convertAgents = (agents = []) => {
  return agents.filter(agent => agent.isPlayableCharacter).map((agent) => {
    return {
      name: agent.displayName,
      description: agent.description,
      displayIcon: agent.displayIcon,
      portrait: agent.displayIcon,
      background: agent.bustPortrait,
      role: agent.role.displayName,
      abilities: agent.abilities.map((ability) => ability.displayName),
    };
  });
};
