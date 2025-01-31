# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah015
Feature: Negative Menambah Master Tag (tambah.tag.015)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data dengan benar setelah save cek halaman urlnya apa sudah di Tag View
    Given Login B2B berhasil (015)
    And Pergi ke menu Master (015)
    And Pergi ke menu Core (015)
    And Pergi ke menu Tag (015)
    When Muncul list tag (015)
    And Klik Create New (015)
    And Mengisi semua data dengan benar setelah save cek halaman urlnya apa sudah di Tag View (015)
    Then Klik Save, data tidak berhasil disimpan (015)