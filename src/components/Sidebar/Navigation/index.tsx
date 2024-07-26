import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
} from 'lucide-react'

import { NavItem } from './NavItem'

export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={Home} title="Home" />
      <NavItem icon={BarChart} title="Dashboard" />
      <NavItem icon={SquareStack} title="Projetos" />
      <NavItem icon={CheckSquare} title="Tarefas" />
      <NavItem icon={Flag} title="Reportes" />
      <NavItem icon={Users} title="Usuários" />
    </nav>
  )
}
