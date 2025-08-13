// Move demigods array outside document.ready to make it globally accessible
let demigods = [];

$(document).ready(function () {
    // Function to render demigod cards
    function renderCards() {
        $('#demigodGrid').empty();
        demigods.forEach((hero, index) => {
            $('#demigodGrid').append(`
                <div class="hero-card bg-white p-6 rounded-lg shadow-md relative hover:shadow-lg">
                    <h3 class="font-bold text-xl text-gray-800 mb-3">${hero.name}</h3>
                    <div class="space-y-2 text-gray-600">
                        <p><span class="font-semibold">Parent:</span> ${hero.parent}</p>
                        <p><span class="font-semibold">Abilities:</span> ${hero.abilities}</p>
                        <p><span class="font-semibold">Weapon:</span> ${hero.weapon}</p>
                    </div>
                    <div class="absolute top-4 right-4 flex gap-2">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transform transition-all hover:scale-105" 
                                onclick="editHero(${index})">Edit</button>
                        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transform transition-all hover:scale-105" 
                                onclick="deleteHero(${index})">Remove</button>
                    </div>
                </div>
            `);
        });
    }

    // Make these functions global
    window.editHero = function(index) {
        const hero = demigods[index];
        $('#modalTitle').text(`Edit ${hero.name}`);
        $('#modalName').val(hero.name);
        $('#modalParent').val(hero.parent);
        $('#modalAbilities').val(hero.abilities);
        $('#modalWeapon').val(hero.weapon);
        $('#modal').removeClass('hidden');
        $('#saveBtn').data('heroIndex', index);
    }

    window.deleteHero = function(index) {
        if (confirm("Are you sure you want to remove this hero?")) {
            demigods.splice(index, 1);
            renderCards();
        }
    }

    // Function to update hero information
    $('#saveBtn').on('click', function() {
        const index = $(this).data('heroIndex');
        const updatedHero = {
            name: $('#modalName').val(),
            parent: $('#modalParent').val(),
            abilities: $('#modalAbilities').val(),
            weapon: $('#modalWeapon').val(),
        };
        demigods[index] = updatedHero;
        $('#modal').addClass('hidden');
        renderCards();
    });

    // Search functionality
    $('#searchField').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('#demigodGrid').children().each(function() {
            const cardText = $(this).text().toLowerCase();
            $(this).toggle(cardText.includes(searchTerm));
        });
    });

    // Show new hero modal
    $('#newHeroBtn').on('click', function() {
        $('#newHeroModal').removeClass('hidden');
    });

    // Add new hero
    $('#addHeroBtn').on('click', function() {
        const name = $('#newHeroName').val();
        const parent = $('#newHeroParent').val();
        const abilities = $('#newHeroAbilities').val();
        const weapon = $('#newHeroWeapon').val();

        if (name && parent && abilities && weapon) {
            const newHero = {
                name: name,
                parent: parent,
                abilities: abilities,
                weapon: weapon,
            };
            demigods.push(newHero);
            renderCards();
            $('#newHeroModal').addClass('hidden');
            $('#newHeroName, #newHeroParent, #newHeroAbilities, #newHeroWeapon').val('');
        } else {
            alert("All fields are required to add a new hero!");
        }
    });

    // Close modals
    $('#closeNewHeroModal').on('click', function() {
        $('#newHeroModal').addClass('hidden');
    });

    $('#closeModal').on('click', function() {
        $('#modal').addClass('hidden');
    });

    // Initial rendering
    renderCards();
});