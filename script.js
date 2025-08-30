 // Sample data for generating fake identities
        const firstNames = [
            'Md', 'Muhammad', 'Sheikh', 'Syed', 'Abdul', 'Abdus', 'Nur', 'Shah', 'Kazi',
            'Anwar', 'Hasan', 'Hossain', 'Fazlul', 'Golam', 'Mostafa', 'Rafiqul', 'Shamsul',
            'Mohiuddin', 'Masud', 'Selim', 'Nazmul', 'Aminul', 'Jahangir', 'Faruk', 'Imran',
            'Tanvir', 'Sajjad', 'Rakib', 'Shakil', 'Sabbir', 'Rashed', 'Towhid', 'Mamun',
            'Arif', 'Shihab', 'Zahid', 'Saiful', 'Mehedi', 'Alamin', 'Monir', 'Kabir',
            'Sumon', 'Tareq', 'Babul', 'Mizan', 'Parvez', 'Kamrul', 'Rubel', 'Shuvo',
            'Akash', 'Shanto', 'Raihan', 'Nahid', 'Sohan', 'Adnan', 'Sharif', 'Shakib',
            'Shohag', 'Bashir', 'Samsul', 'Jalal', 'Badal', 'Rafsan', 'Tanim', 'Rony',
            'Asif', 'Sohag', 'Biplob', 'Touhid', 'Sayeed', 'Raiyan', 'Mahmud', 'Hasib',
            'Ashraf', 'Omar', 'Foysal', 'Mokbul', 'Salim', 'Shahriar', 'Rasel', 'Sumit',
            'Sohanur', 'Anik', 'Atiq', 'Himel', 'Ridoy', 'Nahian', 'Rakibul', 'Nashid',
            'Sakibul', 'Tawsif', 'Habib', 'Ashik', 'Shahadat', 'Rumman', 'Sakib', 'Rafid',
            'Alvi', 'Shahnewaz', 'Tanmoy', 'Rafiqul', 'Mostakim'
        ];

        const lastNames = [
            'Rahman', 'Islam', 'Hasan', 'Hossain', 'Khan', 'Ahmed', 'Ali', 'Chowdhury',
            'Haque', 'Uddin', 'Karim', 'Sikder', 'Talukder', 'Mia', 'Sheikh', 'Sarker',
            'Biswas', 'Mondal', 'Prodhan', 'Patwary', 'Bhuiyan', 'Mazumder', 'Mahmud',
            'Kabir', 'Jamal', 'Salam', 'Azad', 'Hafiz', 'Halim', 'Sobhan', 'Mannan',
            'Sharif', 'Shah', 'Rashid', 'Bari', 'Kamal', 'Nasir', 'Faruq', 'Moin',
            'Shuvo', 'Parvez', 'Masud', 'Imam', 'Hasib', 'Nayem', 'Touhid', 'Rakib',
            'Jalal', 'Rasel', 'Shanto', 'Rubel', 'Babul', 'Sumon', 'Mizan', 'Tareq',
            'Noman', 'Arif', 'Rumi', 'Raihan', 'Mamun', 'Sajjad', 'Tanvir', 'Ashraf',
            'Sohag', 'Foysal', 'Anik', 'Ridoy', 'Sami', 'Rafid', 'Tanim', 'Shakil',
            'Nahid', 'Shuvo', 'Rafsan', 'Rumman', 'Omar', 'Habib', 'Shahadat', 'Ashik',
            'Towhid', 'Rashed', 'Rakibul', 'Sakib', 'Shihab', 'Saiful', 'Monir', 'Rony',
            'Kamrul', 'Mehedi', 'Bashir', 'Shuvo', 'Kabirul', 'Rafiqul', 'Mostakim',
            'Hossan', 'Sayeed', 'Masum', 'Rafey', 'Shahnewaz'
        ];

        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'email.com'];
        const streets = [
            'Station Road',
            'College Road',
            'High School Road',
            'Hospital Road',
            'Main Road',
            'Circular Road',
            'Court Road',
            'Railway Road',
            'Post Office Road',
            'Bus Stand Road',
            'Market Road',
            'New Market Road',
            'Bazar Road',
            'Shahid Minar Road',
            'Police Line Road',
            'Airport Road',
            'Bangabandhu Avenue',
            'Mujib Sarak',
            'Nazrul Avenue',
            'Shapla Road'
        ];

        const cities = [
            'Dhaka',
            'Chattogram',
            'Khulna',
            'Rajshahi',
            'Sylhet',
            'Barishal',
            'Rangpur',
            'Mymensingh',
            'Comilla',
            'Narayanganj',
            'Gazipur',
            'Bogra',
            'Jessore',
            'Cox’s Bazar',
            'Feni',
            'Noakhali',
            'Dinajpur',
            'Kushtia',
            'Tangail',
            'Pabna'
        ];

        const jobs = ['Software Developer', 'Teacher', 'Nurse', 'Accountant', 'Marketing Manager', 'Sales Representative', 'Engineer', 'Designer', 'Doctor', 'Lawyer', 'Chef', 'Writer', 'Photographer', 'Consultant', 'Analyst'];

        // Get DOM elements
        const card = document.getElementById('identityCard');
        const generateBtn = document.getElementById('generateBtn');
        const copyBtn = document.getElementById('copyBtn');
        const notification = document.getElementById('notification');
        const nameElement = document.getElementById('name');
        const ageElement = document.getElementById('age');
        const emailElement = document.getElementById('email');
        const phoneElement = document.getElementById('phone');
        const addressElement = document.getElementById('address');
        const jobElement = document.getElementById('job');

        // Custom particle background implementation
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 5px
                const size = Math.random() * 3 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.6 + 0.2;
                
                container.appendChild(particle);
                
                // Animate the particle
                animateParticle(particle);
            }
        }

        function animateParticle(particle) {
            const duration = Math.random() * 10 + 10; // Random duration between 10s and 20s
            
            // Set initial position
            let x = Math.random() * 100;
            let y = Math.random() * 100;
            
            // Set random movement direction
            const xSpeed = (Math.random() - 0.5) * 0.5;
            const ySpeed = (Math.random() - 0.5) * 0.5;
            
            function move() {
                // Update position
                x += xSpeed;
                y += ySpeed;
                
                // Wrap around edges
                if (x > 100) x = 0;
                if (x < 0) x = 100;
                if (y > 100) y = 0;
                if (y < 0) y = 100;
                
                // Apply new position
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                
                // Continue animation
                requestAnimationFrame(move);
            }
            
            // Start animation
            move();
        }

        // Function to generate random element from array
        function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        // Function to generate random number between min and max
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Function to generate fake identity
        function generateIdentity() {
            const firstName = getRandomElement(firstNames);
            const lastName = getRandomElement(lastNames);
            const age = getRandomNumber(18, 65);
            const randomDigits = getRandomNumber(100, 9999);
            const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomDigits}@${getRandomElement(domains)}`;
            const phone = `+8801${Math.floor(100000000 + Math.random() * 900000000)}`;
            const address = `${getRandomNumber(100, 999)} ${getRandomElement(streets)}, ${getRandomElement(cities)}`;
            const job = getRandomElement(jobs);
            
            return {
                name: `${firstName} ${lastName}`,
                age: age,
                email: email,
                phone: phone,
                address: address,
                job: job
            };
        }

        // Function to update card with new identity
        function updateCard(identity) {
            nameElement.textContent = identity.name;
            ageElement.textContent = identity.age;
            emailElement.textContent = identity.email;
            phoneElement.textContent = identity.phone;
            addressElement.textContent = identity.address;
            jobElement.textContent = identity.job;
        }

        // Function to flip card and generate new identity
        function flipAndGenerate() {
            // Add flipped class to trigger animation
            card.classList.add('flipped');
            
            // Wait for flip animation, then generate new identity
            setTimeout(() => {
                const newIdentity = generateIdentity();
                updateCard(newIdentity);
                
                // Flip card back after a short delay
                setTimeout(() => {
                    card.classList.remove('flipped');
                }, 500);
            }, 300);
        }

        // Function to copy identity information to clipboard
        function copyToClipboard() {
            const identityText = `
Name: ${nameElement.textContent}
Age: ${ageElement.textContent}
Email: ${emailElement.textContent}
Phone: ${phoneElement.textContent}
Address: ${addressElement.textContent}
Job: ${jobElement.textContent}
            `.trim();
            
            navigator.clipboard.writeText(identityText).then(() => {
                // Show notification
                notification.classList.add('show');
                
                // Hide notification after 2 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy to clipboard. Please try again.');
            });
        }

        // Event listeners
        generateBtn.addEventListener('click', flipAndGenerate);
        card.addEventListener('click', flipAndGenerate);
        copyBtn.addEventListener('click', copyToClipboard);

        // Initialize on page load
        window.addEventListener('load', () => {
            createParticles();
            const initialIdentity = generateIdentity(); 
            updateCard(initialIdentity);
        });