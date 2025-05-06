<?php $__env->startSection('content'); ?>
<div class="container mx-auto py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Cadastro de Clientes</h1>
        <a href="<?php echo e(route('clientes.create')); ?>" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <i class="fas fa-plus mr-2"></i> Novo Cliente
        </a>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contato</th>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th class="py-3 px-4 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-4 px-4 border-b border-gray-200">1</td>
                        <td class="py-4 px-4 border-b border-gray-200">Cliente Exemplo</td>
                        <td class="py-4 px-4 border-b border-gray-200">123.456.789-00</td>
                        <td class="py-4 px-4 border-b border-gray-200">(21) 99999-9999</td>
                        <td class="py-4 px-4 border-b border-gray-200">
                            <span class="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Ativo</span>
                        </td>
                        <td class="py-4 px-4 border-b border-gray-200 text-right">
                            <a href="<?php echo e(route('clientes.edit', 1)); ?>" class="text-blue-600 hover:text-blue-900 mr-2">
                                <i class="fas fa-edit"></i>
                            </a>
                            <a href="<?php echo e(route('clientes.show', 1)); ?>" class="text-green-600 hover:text-green-900 mr-2">
                                <i class="fas fa-eye"></i>
                            </a>
                            <form action="<?php echo e(route('clientes.destroy', 1)); ?>" method="POST" class="inline">
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('DELETE'); ?>
                                <button type="submit" class="text-red-600 hover:text-red-900" onclick="return confirm('Tem certeza que deseja excluir este cliente?')">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/juliana-ianov/estacionamento/estacionamento-rotativo/resources/views/cadastros/clientes/index.blade.php ENDPATH**/ ?>