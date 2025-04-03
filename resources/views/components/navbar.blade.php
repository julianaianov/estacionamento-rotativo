<header class="bg-white shadow">
    <div class="flex items-center justify-between px-4 py-2">
        <div class="flex items-center">
            <div class="mr-4">
                <a href="{{ route('home') }}" class="flex items-center">
                    <div class="bg-blue-600 rounded-full p-2 mr-2">
                        <span class="text-white font-bold">E</span>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-gray-800">MARICÁ</h1>
                        <p class="text-sm text-gray-600">ROTATIVO</p>
                    </div>
                </a>
            </div>

            <nav class="flex space-x-1">
                <a href="{{ route('home') }}" class="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                    <i class="fas fa-home mr-1"></i>
                    Home
                </a>

                @include('components.cadastros-dropdown')

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-cogs mr-1"></i>
                        Operacional
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="{{ route('registros.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Registros
                        </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Ocupação
                        </a>
                    </div>
                </div>

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-chart-bar mr-1"></i>
                        Fiscalização
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Consultas
                        </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Autuações
                        </a>
                    </div>
                </div>

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-clock mr-1"></i>
                        Tempo Real
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="{{ route('tempo-real.monitoramento') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Monitoramento
                        </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Alertas
                        </a>
                    </div>
                </div>

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-shopping-cart mr-1"></i>
                        PDV
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="{{ route('pdv.index') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Vendas
                        </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Recargas
                        </a>
                    </div>
                </div>

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-chart-bar mr-1"></i>
                        Relatórios/Consultas
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="{{ route('relatorios.financeiros') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Financeiros
                        </a>
                        <a href="{{ route('relatorios.operacionais') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Operacionais
                        </a>
                    </div>
                </div>

                <div class="relative" x-data="{ open: false }">
                    <button @click="open = !open" @click.away="open = false" class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                        <i class="fas fa-tools mr-1"></i>
                        Manutenção
                        <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Configurações
                        </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Backup
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        <div>
            <button class="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
                <i class="fas fa-sign-out-alt mr-1"></i>
                Sair
            </button>
        </div>
    </div>
</header>

