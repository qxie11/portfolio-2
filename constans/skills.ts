interface ISkills {
  skill: string,
  percent: number
}

class Skill implements ISkills {
  constructor(public skill: string, public percent: number) {
    this.skill = skill;
    this.percent = percent;
  }
}

export const skills: ISkills[] = [
  new Skill('HTML', 80),
  new Skill('CSS', 85),
  new Skill('JS', 75),
  new Skill('SASS', 70),
  new Skill('Jquery', 70),
  new Skill('React JS', 65),
  new Skill('Redux', 80),
  new Skill('Typescript', 50),
  new Skill('NextJS', 50),
  new Skill('NodeJS', 10)
]