<div class="relative" x-data="{ open: false }">
    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
        <i class="fas fa-file-alt mr-1"></i> Cadastros
        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>

    <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute left-0 z-10 w-64 mt-2 origin-top-left bg-white border rounded shadow-lg" style="display: none;">
        <a href="{{ route('usuarios.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-users mr-2"></i> Usuários
        </a>
        <a href="{{ route('clientes.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-user-tie mr-2"></i> Clientes
        </a>
        <a href="{{ route('parquimetros.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-parking mr-2"></i> Parquímetros
        </a>
        <a href="{{ route('ruas-setores.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-road mr-2"></i> Cadastro Ruas/Setores
        </a>
        <a href="{{ route('isentos-pos-pago.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-credit-card mr-2"></i> Cadastro de Isentos/Pós-Pago
        </a>
        <a href="{{ route('feriados.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-calendar-alt mr-2"></i> Cadastro de Feriados
        </a>
        <a href="{{ route('sac-motivos.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-info-circle mr-2"></i> SAC - Cadastro de Motivos
        </a>
        <a href="{{ route('tabelas-valores.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-table mr-2"></i> Cadastro de Tabelas e Valores
        </a>
        <a href="{{ route('tipo-advertencias.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-exclamation-triangle mr-2"></i> Cadastro de Tipo Advertências
        </a>
        <a href="{{ route('turnos.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-clock mr-2"></i> Cadastro de Turnos
        </a>
        <a href="{{ route('manutencao-veiculos.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-car-alt mr-2"></i> Manutenção Dados Veículo/Placa
        </a>
        <a href="{{ route('veiculos-marca-modelo.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-car mr-2"></i> Cadastro de Veículos(Marca/Modelo)
        </a>
        <a href="{{ route('impostos.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-dollar-sign mr-2"></i> Impostos
        </a>
        <a href="{{ route('isentos-vaga-setor.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-ban mr-2"></i> Isento por Vaga/Setor
        </a>
        <a href="{{ route('rotas.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-route mr-2"></i> Rotas
        </a>
        <a href="{{ route('operacoes-parquimetro.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-cogs mr-2"></i> Operações de Parquímetro
        </a>
        <a href="{{ route('motivos-baixa-ai.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
            <i class="fas fa-clipboard-check mr-2"></i> Motivos de baixa de AI
        </a>
        <a href="{{ route('dispositivos.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i class="fas fa-tablet-alt mr-2"></i> Dispositivos
        </a>
    </div>
</div>

